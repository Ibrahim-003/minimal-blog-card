const Card = ({ content }) => {
  const { url, title, tag, body, author } = content;
  return (
    <section className="w-full bg-[#FFFFFF] max-w-sm pt-4 px-4 pb-5 rounded-xl shadow-lg">
      <img src={url} alt={title} className="rounded-xl" />
      <span className="inline-block bg-[#E6D6FC] text-[#883AE1] my-4 text-[10px] py-[6px] px-4 rounded-xl font-bold">
        {tag}
      </span>
      <section>
        <h2 className="text-lg text-[#20293A] font-semibold">{title}</h2>
        <p className="text-sm font-light mt-[6px] mb-5">{body}</p>
        <hr className="block mb-5 border-t-2" />
        <h3 className="text-[12px] font-light">{author}</h3>
      </section>
    </section>
  );
};

export default Card;
