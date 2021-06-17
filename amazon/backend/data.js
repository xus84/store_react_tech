import bcrypt from 'bcryptjs';

const data = {
  users: [
    {  
      name: 'Xus',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {  
      name: 'Jasmine',
      email: 'jasmine@example.com',
      password: bcrypt.hashSync('4321', 8),
      isAdmin: false,
    }
  ],
    products: [ 
        {
        
        name: 'Mac computer',
        category: 'technology',
        image: '../products/macdesktop.jpg',
        price: 1800,
        countInStock: 10,
        brand: 'Mac',
        rating: 5 ,
        description: 'high quality product'
       
       },
       {
        
        name: 'Led Monitor',
        category: 'technology',
        image: '../products/ledmonitor.jpg',
        price: 200,
        countInStock: 10,
        brand: 'Samsung',
        rating: 4 ,
        description: 'best seller'
       
       },
       {
        
        name: 'key board',
        category: 'technology',
        image: '../products/keyboard.webp',
        price: 120,
        countInStock: 10,
        brand: 'brand',
        rating: 4,
        description: 'high quality product'
       
       },
       {
        
        name: 'mouse gamer',
        category: 'technology',
        image: '../products/mousegamer.jpg',
        price: 25,
        countInStock: 10,
        brand: 'LG',
        rating: 5 ,
        description: 'best seller'
       
       },
       {
        
        name: 'head phones',
        category: 'technology',
        image: '../products/sonyheadphones.jpg',
        price: 30,
        countInStock: 0,
        brand: 'sony',
        rating: 5 ,
        description: 'high quality product'
       
       },
       {
        
        name: 'chair',
        category: 'technology',
        image: '../products/chair.jpg',
        price: 190,
        countInStock: 10,
        brand: 'Mac',
        rating: 4 ,
        description: 'high quality product'
       
       },
  ], 
};

export default data;