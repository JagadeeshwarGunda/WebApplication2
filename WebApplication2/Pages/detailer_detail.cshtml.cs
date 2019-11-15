using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace WebApplication2.Pages
{
    public class detailer_detailModel : PageModel
    {
        private readonly ILogger<detailer_detailModel> _logger;

        public detailer_detailModel(ILogger<detailer_detailModel> logger)
        {
            _logger = logger;
        }
        public void OnGet()
        {

        }
    }
}