using System.ComponentModel.DataAnnotations;

namespace StoreBackend.Models;

public class ProductCreateDTO
{
    [Required]
    public string Name { get; set; } = string.Empty;
    
    public string Description { get; set; } = string.Empty;
    
    [Range(0.01, double.MaxValue)]
    public decimal Price { get; set; }
    
    [Required]
    public string Category { get; set; } = string.Empty;
}