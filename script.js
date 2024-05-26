document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
    
    // Mock product data
    const products = [
        { 
            id: 1, 
            name: "Pen Set", 
            price: 150, 
            image: "https://tse2.mm.bing.net/th?id=OIP.TTie-IIP0vSrNQ-lC8AkMQHaHa&pid=Api&P=0&h=220",
            description: "A stylish pen set featuring ballpoint pens in various colors. Perfect for everyday writing tasks."
        },
        { 
            id: 2, 
            name: "Notebook", 
            price: 100, 
            image: "https://tse2.mm.bing.net/th?id=OIP.-j2Z8uM3koQgoo7xfV3eGwHaHa&pid=Api&P=0&h=220",
            description: "A high-quality notebook with lined pages. Ideal for taking notes, journaling, or doodling."
        },
        { 
            id: 3, 
            name: "Stationary Kit", 
            price: 300, 
            image: "https://tse4.mm.bing.net/th?id=OIP.kF0GFbwbj4Emo2uwuc7HKgHaHa&pid=Api&P=0&h=220",
            description: "A comprehensive stationary kit containing essential items like pens, pencils, erasers, rulers, and more."
        },
        { 
            id: 4, 
            name: "Calculator", 
            price: 200, 
            image: "https://tse2.mm.bing.net/th?id=OIP.4Lt_eIJ3bdTxcDmjbUzxiwHaHa&pid=Api&P=0&h=220",
            description: "A sleek and efficient calculator for basic arithmetic calculations. Perfect for students and professionals."
        },
        { 
            id: 5, 
            name: "Sticky Notes", 
            price: 50, 
            image: "https://tse3.explicit.bing.net/th?id=OIP.71q9ovRhIZNVrrb5s5sSzAHaE8&pid=Api&P=0&h=220",
            description: "Colorful sticky notes for leaving reminders, jotting down quick notes, and organizing tasks."
        },
        { 
            id: 6, 
            name: "Pencil Box", 
            price: 80, 
            image: "https://tse3.mm.bing.net/th?id=OIP.MH1po4C72qqujTwlCBgcwwHaHa&pid=Api&P=0&h=220",
            description: "A sturdy pencil box with compartments for organizing pencils, erasers, sharpeners, and other stationery items."
        },
        { 
            id: 7, 
            name: "Eraser", 
            price: 20, 
            image: "https://tse2.mm.bing.net/th?id=OIP.nOtFsZ2vrn4Q8hr4K1LceAHaGO&pid=Api&P=0&h=220",
            description: "A soft and durable eraser for cleanly removing pencil marks from paper without leaving smudges."
        },
        { 
            id: 8, 
            name: "Ruler", 
            price: 30, 
            image: "https://tse3.mm.bing.net/th?id=OIP.Qjmo2wxrkmwnpgsSQYMiHgHaG9&pid=Api&P=0&h=220",
            description: "A transparent ruler with metric and imperial measurements for precise drawing and measurement tasks."
        },
        { 
            id: 9, 
            name: "Markers", 
            price: 70, 
            image: "https://tse4.mm.bing.net/th?id=OIP.__rrgoYfDGj9nkOx0Sj2HAAAAA&pid=Api&P=0&h=220",
            description: "A set of vibrant markers for coloring, drawing, and highlighting. Perfect for artists and students alike."
        },
        { 
            id: 10, 
            name: "Glue Stick", 
            price: 40, 
            image: "https://tse3.mm.bing.net/th?id=OIP._tDbaxJNkchnqfDhSuqjswHaHa&pid=Api&P=0&h=220",
            description: "A convenient glue stick for bonding paper, cardboard, and other lightweight materials. Mess-free application."
        },
        { 
            id: 11, 
            name: "Scissors", 
            price: 60, 
            image: "https://tse3.mm.bing.net/th?id=OIP.NxWZ8pOSUQLm1nO1yQfvLAHaEv&pid=Api&P=0&h=220",
            description: "A pair of sharp and durable scissors for cutting paper, fabric, and other materials with precision and ease."
        }
    ];
      
    // Display products
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
    
        const image = document.createElement("img");
        image.src = product.image;
    
        const name = document.createElement("h2");
        name.textContent = product.name;
    
        const price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;
    
        const description = document.createElement("p");
        description.textContent = product.description;
    
        const button = document.createElement("button");
        button.textContent = "View Details";
        button.addEventListener("click", () => {
            // Redirect to product detail page
            window.location.href = `product.html?id=${product.id}`;
        });
    
        productDiv.appendChild(image);
        productDiv.appendChild(name);
        productDiv.appendChild(price);
        productDiv.appendChild(description);
        productDiv.appendChild(button);
    
        productList.appendChild(productDiv);
    });
});
