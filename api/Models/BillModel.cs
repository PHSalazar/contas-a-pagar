using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class BillModel
    {
        [Key]
        public int Id { get; set; }
        public int IDUser { get; set; }
        public string Title { get; set; }
        public int Duedate { get; set; }
        public decimal Amount { get; set; }
        public bool Completed { get; set; }
    }
}
