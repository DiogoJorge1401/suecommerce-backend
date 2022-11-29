import { IProductModel } from '@/models/Product';

interface GetAllProducts {
  new: boolean;
  category: string;
}

export class GetAllProductsUseCase {
  constructor(private productModel: IProductModel) {}

  async execute(q: GetAllProducts) {
    const qNew = q.new;

    const qCategory = q.category?.split(',');

    const filter = { __v: false };

    let products = this.productModel.find().select(filter);

    if (qNew) products = products.sort({ _id: -1 }).limit(5);
    if (qCategory)
      products = products.find({
        categories: {
          $in: qCategory,
        },
      });

    return products.exec();
  }
}
