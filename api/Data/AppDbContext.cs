using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<BillModel>()
                .HasKey(b => b.Id);
            modelBuilder.Entity<BillModel>()
                .Property(b => b.Amount)
                .HasColumnType("decimal(18,2)");
        }

        public DbSet<BillModel> Bills { get; set; }
    }
}
