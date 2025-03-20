using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class BillRepository
    {
        private readonly AppDbContext _context;

        public BillRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<BillModel>> GetAllBillsByUser(int idUser)
        {
            var bills = _context.Bills.Where(b => b.IDUser == idUser).ToList();
            return bills;
        }
        public async Task<BillModel> GetBillByIdAsync(int id)
        {
            return await _context.Bills.FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task Create(BillModel newBill)
        {
            _context.Bills.Add(newBill);
            await SaveAsync();
        }

        public async Task Delete(int idUsuario, int id)
        {
            var bill = _context.Bills.FirstOrDefault(b => b.IDUser == idUsuario && b.Id == id);
            _context.Bills.Remove(bill);
            await SaveAsync();
        }

        public void UpdateBill(BillModel bill)
        {
            _context.Bills.Update(bill);
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
