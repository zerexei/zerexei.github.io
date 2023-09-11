const ComingSoon = () => {
  setInterval(() => {
    const date: Date = new Date();
    const nextYear = date.getFullYear() + 1;
    const distance = new Date(String(nextYear), 0) - date.getTime();

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const element_days: HTMLElement | null = document.querySelector('.days');
    if (element_days) element_days.innerText = twoDigits(days);

    const element_hours: HTMLElement | null = document.querySelector('.hours');
    if (element_hours) element_hours.innerText = twoDigits(hours);

    const element_minutes: HTMLElement | null =
      document.querySelector('.minutes');
    if (element_minutes) element_minutes.innerText = twoDigits(minutes);

    const element_seconds: HTMLElement | null =
      document.querySelector('.seconds');
    if (element_seconds) element_seconds.innerText = twoDigits(seconds);
  }, 1000);

  function twoDigits(key: number): string {
    const str_key = String(key);
    return str_key.length > 1 ? str_key : `0${str_key}`;
  }

  return (
    <div id="coming-soon" className="text-center text-gray-500">
      <h2 className="">Coming Soon</h2>
      <p>
        <span className="days"></span>days <span className="hours ml-2"></span>h
        <span className="minutes ml-2"></span>m <span className="seconds ml-2"></span>s
      </p>
    </div>
  );
};

export default ComingSoon;
