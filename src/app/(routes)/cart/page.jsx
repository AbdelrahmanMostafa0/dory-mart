import CartDetails from "@/components/cart/CartDetails";
import PageWrapper from "@/components/PageWrapper";

export const metadata = {
  title: "My Cart | Dorymart",
  description: "View your cart details",
};
const page = () => {
  return (
    <PageWrapper>
      <CartDetails />
    </PageWrapper>
  );
};
export default page;
