import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductDetail from "@/components/shops/singleProduct/productDetail";
import RelatedProducts from "@/components/shops/singleProduct/relateProduct";
import ProductDetailTabs from "@/components/shops/singleProduct/tabs";
import Banner from "@/components/shops/singleProduct/banner";
export default function singleProduct() {
  return (
    <>
    <Header/>
    <Banner/>
    <ProductDetail/>
    <ProductDetailTabs/>
    <RelatedProducts/>
    <Footer/>
    </>
  );
}
