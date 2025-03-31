export default function Card() {
    const products = [
            { 
                id: 1, 
                title: "Lorem ipsum dolor", 
                description: "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.", 
            },
            { 
                id: 2, 
                title: "Lorem ipsum dolor", 
                description: "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.", 
            },
            { 
                id: 3, 
                title: "Lorem ipsum dolor", 
                description: "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.", 
            }
        ]

    return (
        <div className="flex flex-col justify-center md:flex-row p-8 md:pb-16 px-6 md:px-20 md:pt-16">
            <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {products.map((product) => (
                    <div className="flex flex-col items-start p-6 rounded-2xl shadow-md  bg-white md:w-[370px] md:h-[276px] gap-2 border-2 border-[#DFBBFE]">
                        <h3 className="text-xl font-semibold text-left md:text-2xl">{product.title}</h3>
                        <p className="text-gray-500 text-left text-base md:text-xl">{product.description}</p>
                        <div className="w-full flex justify-center mt-4">
                            <button className="py-2 px-10 bg-[#DFBBFE] rounded-sm text-base font-bold text-[#2D2D2D]">Lorem ipsum</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )    
}