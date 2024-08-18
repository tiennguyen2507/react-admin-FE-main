import { PageConfig } from '@/config/pageConfig';
import DashBoardLayout from '@/layouts/DashBoardLayout';
import { withLogin } from '@/middleware/withLogin';

const Product = () => {
  return (
    <DashBoardLayout>
      <div>Product</div>
    </DashBoardLayout>
  );
};

export default () =>
  PageConfig({
    Page: Product,
    title: 'Product page',
    middleware: [withLogin],
  });
