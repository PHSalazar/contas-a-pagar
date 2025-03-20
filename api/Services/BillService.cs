using api.Models;
using api.Repositories;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
    public class BillService
    {
        private readonly BillRepository _billRepository;

        public BillService(BillRepository billRepository)
        {
            _billRepository = billRepository;
        }

        public async Task<List<BillModel>> GetAllBillsById(int idUser)
        {
            return await _billRepository.GetAllBillsByUser(idUser);
        }

        public async Task Create(BillModel bill)
        {
            await _billRepository.Create(bill);
        }

        public async Task Delete(int idUsuario, int id)
        {
            _billRepository.Delete(idUsuario, id);
        }

        public async Task<BillModel> CompleteBillAsync(int id)
        {
            var bill = await _billRepository.GetBillByIdAsync(id);
            if (bill == null)
            {
                throw new ArgumentNullException($"Conta com ID {id} não encontrada.");
            }

            bill.Completed = true;
            _billRepository.UpdateBill(bill);
            await _billRepository.SaveAsync();

            return bill;
        }
    }
}
