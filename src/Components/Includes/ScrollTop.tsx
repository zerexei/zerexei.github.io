import UpIcon from '@/Components/Includes/Icons/UpIcon';

const ScrollTop = () => {
  window.onscroll = () => {
    const scroll_top_button: HTMLElement | null =
      document.querySelector('#scroll-top');

    if (!scroll_top_button) return;

    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      scroll_top_button.style.display = 'block';
    } else {
      scroll_top_button.style.display = 'none';
    }
  };

  return (
    <span
      id="scroll-top"
      onClick={() => scrollTo(0, 0)}
      className="fixed hidden p-4 rounded-full cursor-pointer bottom-5 right-8 animate-bounce bg-red-400/75 hover:bg-red-400"
    >
      <UpIcon />
    </span>
  );
};

export default ScrollTop;
