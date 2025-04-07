using StoreBackend.Models;
using System.Collections.Generic;

namespace StoreBackend.Services;

public class ProductService
{
    private readonly List<Product> _products = new()
    {
        new Product { Id = 1, Name = "Sample Product", Price = 9.99m, Quantity = 10 }
    };

    public IEnumerable<Product> GetProducts() => _products;
}