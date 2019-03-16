using DTOs.Models;
using System.Collections.Generic;

namespace DTOs.Model
{
    public class ProfileInfoDto
    {
        public string Role { get; set; }

        public string Email { get; set; }

        public IEnumerable<ProjectDto> Projects { get; set; }

        public string Department { get; set; }

        public string Description { get; set; }

        public string Position { get; set; }
    }
}
