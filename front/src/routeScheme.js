// @flow

type MenuItem = {
  name: string,
  route: string,
  subMenu?: Array<MenuItem>
};

const menuItems: Array<MenuItem> = [
  {
    name: 'О нас',
    route: 'about'
  }, {
    name: 'Сервис и гарантия',
    route: 'service',
    subMenu: [
      {
        name: 'Порядок заказа мебели и расчетов',
        route: 'order'
      }, {
        name: 'Доставка и монтаж',
        route: 'delivery'
      }, {
        name: 'Наши гарантии',
        route: 'guarantee'
      }, {
        name: 'Скидки и рассрочка',
        route: 'discount'
      }, {
        name: 'Памятка покупателю',
        route: 'memo'
      }
    ]
  }, {
    name: 'Порфолио',
    route: 'portfolio',
    subMenu: [
      {
        name: 'Кухни',
        route: 'kitchen'
      }, {
        name: 'Шкафы купе и гардеробные',
        route: 'wardrobe'
      }, {
        name: 'Корпусная мебель',
        route: 'cabinet'
      }, {
        name: 'Ванные и нестандарты',
        route: 'bathroom'
      }
    ]
  }, {
    name: 'Блог',
    route: 'blog'
  }, {
    name: 'Контакты',
    route: 'contacts'
  }
];

export default menuItems;
