const menu_data = [
  {
    id: 4,
    single_link: true,
    title: "Home",
    link: "/",
  },
  {
    id: 4,
    single_link: true,
    title: "About Us",
    link: "/about",
  },
  {
    id: 5,
    sub_menu: true,
    title: "Services",
    link: "/services",
    sub_menus: [
      {
        title: "AC Repair and Maintenance",
        link: "/ac-repair-and-maintenance",
      },
      { title: "Handyman", link: "/handyman" },
      { title: "Carpenter", link: "/carpenter" },
      { title: "Plumber", link: "/plumber" },
      { title: "Electrician", link: "/electrician" },
      { title: "Home Appliances", link: "/home-appliances" },
      { title: "Painter", link: "/painter" },
    ],
  },
  {
    id: 6,
    single_link: true,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;

// mobile_menu
export const mobile_menu = [
  {
    id: 4,
    single_link: true,
    title: "Home",
    link: "/",
  },
  {
    id: 4,
    single_link: true,
    title: "About",
    link: "/about",
  },
  {
    id: 5,
    sub_menu: true,
    title: "Services",
    link: "/services",
    sub_menus: [
      {
        title: "AC Repair and Maintenance",
        link: "/ac-repair-and-maintenance",
      },
      { title: "Handyman", link: "/handyman" },
      { title: "Carpenter", link: "/carpenter" },
      { title: "Plumber", link: "/plumber" },
      { title: "Electrician", link: "/electrician" },
      { title: "Home Appliances", link: "/home-appliances" },
      { title: "Painter", link: "/painter" },
    ],
  },
  {
    id: 6,
    single_link: true,
    title: "Contact",
    link: "/contact",
  },
];
