const social_links = [
  { label: 'Github', url: 'https://github.com/zerexei' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/angeloarcillas' },
  { label: 'Twitter', url: '#' },
  { label: 'LeetCode', url: 'https://leetcode.com/angeloarcillas' },
  { label: 'Codewars', url: 'https://www.codewars.com/users/angeloarcillas64' },
  { label: 'Discord', url: 'https://discord.com/users/743835873287733249' },
];

export default () => {
  return (
    <div className="flex justify-center flex-wrap gap-4">
      {social_links.map((link, index) => {
        return (
          <a
            key={index}
            href={link.url}
            className="text-blue-500 border border-blue-400 py-2 px-6 rounded-md hover:underline"
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
};
