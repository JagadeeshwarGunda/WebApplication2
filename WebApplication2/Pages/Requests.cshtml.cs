using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace WebApplication2.Pages
{
    public class RequestsModel : PageModel
    {
        private readonly ILogger<RequestsModel> _logger;

        public RequestsModel(ILogger<RequestsModel> logger)
        {
            _logger = logger;
        }
        public void OnGet()
        {

        }
    }
}