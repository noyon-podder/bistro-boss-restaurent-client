import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../shared/cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderCard from "../orderCard/orderCard";
import "./Order.css";
import useFilterCategory from "../../../hooks/useFilterCategory";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salads", "pizza", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialCategory = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialCategory);

  const dessert = useFilterCategory("dessert");
  const soup = useFilterCategory("soup");
  const pizza = useFilterCategory("pizza");
  const salad = useFilterCategory("salad");
  const drinks = useFilterCategory("drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover bgImage={orderCover} pageTitle={"Order Food"} />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="py-5 text-center font-semibold text-gray-800 mr-5 ml-5">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderCard orderCategory={salad} />
        </TabPanel>
        <TabPanel>
          <OrderCard orderCategory={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderCard orderCategory={soup} />
        </TabPanel>
        <TabPanel>
          <OrderCard orderCategory={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderCard orderCategory={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
