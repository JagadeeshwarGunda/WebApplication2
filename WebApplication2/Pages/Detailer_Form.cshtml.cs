using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace WebApplication2.Pages
{
    public class Detailer_FormModel : PageModel
    {
        private readonly ILogger<Detailer_FormModel> _logger;

        public Detailer_FormModel(ILogger<Detailer_FormModel> logger)
        {
            _logger = logger;
        }
        public void OnGet()
        {

        }
    }
}