import img1 from "../assets/img-card1.png";
import img2 from "../assets/img-card2.png";
import img3 from "../assets/img-card3.png";
import img4 from "../assets/img-card4.png";

export default function Products() {
    const products = [
        { 
            id: 1, 
            title: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo", 
            image: img1 
        },
        { 
            id: 2, 
            title: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo", 
            image: img2 
        },
        { 
            id: 3, 
            title: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo", 
            image: img3 },
        { 
            id: 4, 
            title: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo", 
            image: img4 
        }
    ]

    return (
        <div className="p-8 px-6 md:px-20 md:pt-16 md:pb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur</h2>
            <p className="text-base md:text-2xl text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="p-2 rounded-lg shadow-md bg-white">
                        <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-lg font-semibold">{product.title}</h3>
                        <p className="text-gray-500">{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
