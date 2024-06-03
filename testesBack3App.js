Parse.initialize("Yqm6Dc70xMs0ZJtBQVWhfD17ZYv5QPkxabdD8W33", "1JHSAOH53z6c2i0E1uCEnHDufoRco4vvjaJ3ng66");
Parse.serverURL = 'https://parseapi.back4app.com/';

async function setupYagoSupermarket() {
    // Criar um novo usuário Yago
    const User = Parse.Object.extend("User");
    const user = new User();
    user.set("username", "yago");
    user.set("password", "password123");
    user.set("email", "yago@example.com");
    user.set("cpf", "12345678900");
  
    try {
      await user.signUp();
      console.log("User Yago created:", user);
  
    //   // Criar categorias
    //   const Category = Parse.Object.extend("Category");
  
    //   const alimentosNaoPereciveis = new Category();
    //   alimentosNaoPereciveis.set("name", "Alimentos Não Perecíveis");
    //   await alimentosNaoPereciveis.save();
  
    //   const bebidas = new Category();
    //   bebidas.set("name", "Bebidas");
    //   await bebidas.save();
  
    //   console.log("Categories created");
  
    //   // Criar um supermercado
    //   const Supermarket = Parse.Object.extend("Supermarket");
    //   const supermarket = new Supermarket();
    //   supermarket.set("user", user);
    //   supermarket.set("name", "Yago Supermercados");
    //   supermarket.set("cnpj", "12345678000199");
    //   supermarket.set("email", "contato@yagosupermercados.com");
    //   supermarket.set("endereco", "Rua Principal, 123, Cidade, Estado, CEP");
  
    //   // Adicionar relação com categorias
    //   const relation = supermarket.relation("categories");
    //   relation.add(alimentosNaoPereciveis);
    //   relation.add(bebidas);
  
    //   await supermarket.save();
    //   console.log("Supermarket Yago Supermercados created:", supermarket);
  
    //   // Criar produtos
    //   const Product = Parse.Object.extend("Product");
  
    //   const arroz = new Product();
    //   arroz.set("name", "Arroz");
    //   arroz.set("supermarket", supermarket);
    //   arroz.set("category", alimentosNaoPereciveis);
    //   arroz.set("quantity", 50);
    //   arroz.set("expirationDate", new Date(2025, 11, 31));
    //   arroz.set("description", "Arroz não perecível");
  
    //   const agua = new Product();
    //   agua.set("name", "Água");
    //   agua.set("supermarket", supermarket);
    //   agua.set("category", bebidas);
    //   agua.set("quantity", 100);
    //   agua.set("expirationDate", new Date(2024, 11, 31));
    //   agua.set("description", "Água mineral");
  
    //   await arroz.save();
    //   await agua.save();
  
    //   console.log("Products Arroz and Água created");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Execute the setup function
  setupYagoSupermarket();
  