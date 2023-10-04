var AllowSpecificOrigins = "AllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost:3001");
        });
});
builder.Services.AddControllers();

var app = builder.Build();
app.UseCors(AllowSpecificOrigins);
app.UseRouting();
app.UseAuthorization();
app.MapControllers();

app.Run();
