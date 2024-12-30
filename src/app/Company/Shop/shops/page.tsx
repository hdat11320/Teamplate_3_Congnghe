// pages/shop.tsx

import Footer from "@/components/footer";
import Header from "@/components/header";
import Banner from "@/components/shops/banner";
import Pagination from "@/components/shops/Pagination";
import SearchAndFilter from "@/components/shops/SearchAndFilter";
import Sidebar from "@/components/shops/SideBar";
import ProductList from "@/componentsAdmin/Product/page";



export default function Shop() {
  return (
    <>
    <Header/>
    <Banner/>
    <div className="container mx-auto py-16">
    <SearchAndFilter />
    <div className=" flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <ProductList/>
        <Pagination />
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}
