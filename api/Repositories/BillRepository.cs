using api.Data;
using api.Models;

namespace api.Repositories
{
    public class BillRepository
    {
        private readonly AppDbContext _context;

        public BillRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task Create(BillModel newBill)
        {
            _context.Bills.Add(newBill);
            await _context.SaveChangesAsync();
        }

        public async Task<List<BillModel>> Get()
        {
            return _context.Bills.ToList();
        }
    }
}
