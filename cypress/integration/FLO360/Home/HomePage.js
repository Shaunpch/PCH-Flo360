///<reference types = "Cypress"/>

import { HomePageTests } from "../../../src/FLO360/Home/HomePage";


HomePageTests
(
    //Company name
    'Chaos',
    //Morning Text
    'Good morning, Shaun Marchel Meyer',
    //Afternoon Text
    'Good afternoon, Shaun Marchel Meyer',
    //****Breadcrumb texts****//
    'Home›Products Dashboard',
    'Home›Product Origin Dashboard',
    'Home›Sourcing Suppliers',
    'Home›Sourcing Products',
    'Home›Purchase Order Dashboard',
    'Home›Production Dashboard',
    'Home›Inventory Dashboard',
    'Home›Shipments Dashboard',
    'Home›Delivery Order Dashboard',
    'Home›Finance Dashboard',
    'Home›Report Dashboard',
    'Home›Teams'
); 