using api.Models;
using api.Repositories;

namespace api.Services
{
    public class BillService
    {
        private readonly BillRepository _billRepository;

        public BillService(BillRepository billRepository)
        {
            _billRepository = billRepository;
        }

        public async Task Create(BillModel bill)
        {
            if (bill == null)
                throw new ArgumentNullException(nameof(bill));

            await _billRepository.Create(bill);
        }

        public async Task<List<BillModel>> GetAll()
        {
            return await _billRepository.Get();
        }
    }
}
