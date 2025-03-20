using api.Models;
using api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillsController : ControllerBase
    {
        private readonly BillService _billService;

        public BillsController(BillService billService)
        {
            _billService = billService;
        }

        [HttpGet]
        public async Task<ActionResult<List<BillModel>>> GetAllBillsById([FromRoute] int idUser)
        {
            return await _billService.GetAllBillsById(idUser);
        }

        [HttpPost]
        public async Task<ActionResult<BillModel>> Create([FromBody] BillModel billModel)
        {
            await _billService.Create(billModel);
            return CreatedAtAction(nameof(GetAllBillsById), new { id = billModel.Id }, billModel);
        }

        [HttpDelete("{idUser:int}/{idBill:int}")]
        public async Task<ActionResult> Delete([FromRoute] int idUser, [FromRoute] int idBill)
        {
            var bill = _billService.Delete(idUser, idBill);
            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> CompleteBill(int id)
        {
            try
            {
                var updatedBill = await _billService.CompleteBillAsync(id);
                return Ok(updatedBill);
            }
            catch (ArgumentNullException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno: {ex.Message}");
            }
        }
    }
}
