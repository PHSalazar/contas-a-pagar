using api.Models;
using api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillController : ControllerBase
    {
        private readonly BillService _billService;

        public BillController(BillService billService)
        {
            _billService = billService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var bills = await _billService.GetAll();
            return Ok(bills);
        }

        [HttpPost]
        public async Task<IActionResult> Post(BillModel bill)
        {
            await _billService.Create(bill);
            return Ok(bill);
        }
    }
}
