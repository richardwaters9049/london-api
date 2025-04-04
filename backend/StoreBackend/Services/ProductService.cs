using Refit;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace StoreBackend.Services
{
    public interface IProductApi
    {
        [Get("/products?category=clothing")]
        Task<List<Product>> GetProducts();
    }

    public class ProductService
    {
        private readonly IProductApi _api;

        public ProductService()
        {
            _api = RestService.For<IProductApi>("https://fakestoreapi.com");
        }

        public async Task<List<Product>> GetProducts()
        {
            return await _api.GetProducts();
        }
    }
}