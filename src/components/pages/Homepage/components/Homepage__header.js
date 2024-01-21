const HomepageHeader = ({ user, userGetStatus }) => {
  return (
    <div className="Homepage__header">
      {userGetStatus == "error" ? (
        <div className="Homepage__userError">Данные временно недоступны!</div>
      ) : (
        <>
          <div className="Homepage__title title">
            {`Привет, ${user?.first_name}!`}
            <img src="/images/homepage-helloEmoji.png" />
          </div>
          <div className="Homepage__info">
            <div className="Homepage__info-item">{`${user?.course} курс`}</div>
            <div className="Homepage__info-item">{`Группа ${user?.learning_group}`}</div>
            <div className="Homepage__info-item">{user?.faculty}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomepageHeader;
