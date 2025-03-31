import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [media, setMedia] = useState({});

  useEffect(() => {
    fetch("http://psel-monks-analista.local/wp-json/wp/v2/produto")
      .then((response) => response.json())
      .then(async (data) => {
        setProducts(data);

        // Busca todas as imagens destacadas
        const mediaRequests = data.map((product) =>
          fetch(product._links["wp:featuredmedia"]?.[0]?.href)
            .then((res) => res.json())
            .then((imgData) => ({ id: product.featured_media, url: imgData.source_url }))
            .catch(() => ({ id: product.featured_media, url: "" }))
        );

        const mediaResults = await Promise.all(mediaRequests);
        const mediaMap = mediaResults.reduce((acc, item) => {
          acc[item.id] = item.url;
          return acc;
        }, {});

        setMedia(mediaMap);
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  return (
    <div className="p-8 px-6 md:px-20 md:pt-16 md:pb-8">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Lorem ipsum dolor sit amet consectetur</h2>
      <p className="text-base md:text-2xl text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id || product.title.rendered} className="p-2 rounded-lg shadow-md bg-white">
            {media[product.featured_media] && (
                <img
                    src={media[product.featured_media]}
                    alt={product.title.rendered}
                    className="w-full h-40 object-cover rounded-md mb-2"
                />
            )}
            <h3 className="text-lg font-semibold md:mb-2">
              {product.title ? product.title.rendered : "Título não disponível"}
            </h3>
            <p className="text-gray-500">
              <span dangerouslySetInnerHTML={{ __html: product.content.rendered }} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};