import { useState } from 'react';
import '../App.css';
import { toast } from 'react-toastify';

const Contact = () => {
  const [message, setMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const sendMessage = async () => {
    const token = '7014941655:AAGccnh01y1JkW9E3ggcwSlg5NwoaEKQdL8';
    const chatId = '5923880668'; // The chat ID of the user or group you want to send the message to
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: `Name: ${name}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
        }),
      });

      if (response.ok) {
        console.log('Message sent successfully');

        toast.success('Успешно отправленно');
        setMessage('');
        setPhoneNumber('');
        setName('');
      } else {
        console.error('Failed to send message');
        toast.error(await response.text());
        throw new Error('Server error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div id="connect" className="bg-[#202733] py-24">
      <div className="containers max-sm:px-2">
        <div
          data-aos="zoom-in-down"
          className="aos-init aos-animate mx-36 rounded-2xl bg-[url('/form.jpg')] bg-cover bg-center bg-no-repeat object-cover px-16 py-10 max-lg:mx-10 max-md:mx-4 max-md:px-6 max-sm:mx-0 max-sm:px-6 max-sm:py-6"
        >
          <h3
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="aos-init aos-animate w-1/2 text-[32px] text-white max-lg:w-full max-lg:text-[28px] max-sm:text-center max-sm:text-[18px]"
          >
            Savollar, takliflar yoki so'rovlar bormi?
          </h3>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="aos-init aos-animate mt-10 flex w-1/2 flex-col gap-6 max-md:w-full max-md:gap-6 max-sm:mt-6 max-sm:items-center max-sm:gap-3"
          >
            <input
              type="text"
              className="border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full max-w-[375px] rounded-full border bg-[#d9d9d9] px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Ismingiz"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              className="border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring no-spinner flex h-10 w-full max-w-[375px] rounded-full border bg-[#d9d9d9] px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Telefon raqamingiz"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <textarea
              className=" border-input  ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[140px] w-full max-w-[375px] resize-none rounded-2xl border bg-[#d9d9d9] px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Sizning Xabaringiz..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              onClick={(e) => {
                sendMessage(), e.preventDefault();
              }}
              className="ring-offset-background focus-visible:ring-ring  text-primary-foreground scale inline-flex h-10 w-36 cursor-pointer items-center justify-center whitespace-nowrap rounded-md rounded-l-full rounded-r-full border-2 bg-transparent bg-white px-10 py-2 text-sm font-medium transition-colors hover:border-gray-500 hover:bg-transparent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Jo'natish
            </button>
          </div>
        </div>
        <div className="Toastify"></div>
      </div>
    </div>
  );
};

export default Contact;
