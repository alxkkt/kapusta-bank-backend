const verifyMarkup = (email) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kapu$ta bank</title>
    <style type="text/css">
      .bg {
        max-height: 90vh;
        background: #ffffff;
        background-image: url("https://cdn.pixabay.com/photo/2022/08/21/08/23/08-23-13-441_960_720.png"),
          url("https://cdn.pixabay.com/photo/2022/08/21/08/23/08-23-13-201_960_720.png"),
          linear-gradient(to bottom, (#f5f6fb 40%), (#ffffff 40%));
        background-repeat: no-repeat;
        background-position: top 90px left 10px, bottom 30px left 25px, center;
      }
      .authPage {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        min-width: 320px;
        height: 100vh;
        margin: 0 auto;
      }

      .wrap {
        display: block;
        margin-left: 20px;
        margin-bottom: 20px;
        padding-top: 20px;
      }
      .title {
        margin-bottom: 8px;

        font-size: 54px;
        font-weight: 900;
        text-align: center;

        line-height: 1.17;
        color: #000;
      }
      .text {
        margin-bottom: 24px;
        font-weight: 700;
        font-size: 13px;
        line-height: 1.15;
        letter-spacing: 0.15em;
        text-transform: uppercase;
      }

      .link {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;

        width: 115px;
        height: 44px;

        font-weight: 700;
        font-size: 12px;
        line-height: 1.17;

        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;

        color: #fff;
        background-color: rgba(255, 117, 29, 1);
        border: none;
        border-radius: 15px;

        cursor: pointer;
      }

      /* media rules */

      /* start lower */

      @media screen and (min-width: 480px) {
        .authPage {
          width: 480px;
        }
      }
      @media screen and (min-width: 768px) {
        .bg {
          max-height: 100vh;
          background-image: url(../../shared/images/svg/cabbage-line.svg),
            url(../../shared/images/svg/cabbage-bottom.svg),
            linear-gradient(to bottom, (#f5f6fb 70%), (#ffffff 70%));
          background-position: top 84px left 10px, left 50px bottom 40px, center;
        }
        .authPage {
          width: 768px;
        }
        .title {
          font-size: 64px;
          margin-bottom: 20px;
        }
        .text {
          font-size: 16px;
          line-height: 1.18;
          letter-spacing: 0.18em;
        }
        .link {
          width: 125px;
        }
      }

      @media screen and (min-width: 1280px) {
        .bg {
          background-image: linear-gradient(
            to bottom,
            (#f5f6fb 75%),
            (#ffffff 75%)
          );
          background-position: center;
        }
        .authPage {
          background-image: url(../../shared/images/svg/cabbage-line.svg),
            url(../../shared/images/svg/cabbage-bottom.svg);
          background-repeat: no-repeat;
          display: flex;
          align-items: center;

          width: 1280px;
          height: 90vh;

          background-position: top 25px left 10px, left 120px bottom 30px;
        }

        .wrap {
          width: 420px;
          margin-right: 112px;
          width: 420px;
          margin-left: 120px;
          margin-right: auto;
        }
        .title {
          font-size: 102px;
        }

        .text {
          font-size: 18px;
        }
      }
    </style>
  </head>
  <body class="bg">
    <div class="authPage">
      <div className="wrap">
        <h1 className="title">Kapu$ta</h1>
        <p className="text">Smart Finance</p>
      </div>
      <h2 class="title">Email verification successful</h2>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0yidZrerQQKXwAmX6Lz8qzfupmmfRfP6Spn0ZV5RotYfhAYMmnd1WVM2E8dLsXOlGcM&usqp=CAU"
        alt="congratulation, verification confirmed"
        style="display: block; margin-bottom: 20px"
      />
      <a href="https://kapusta-bank-client.vercel.app/auth" class="link">
        Log In
      </a>
    </div>
  </body>
</html>

`;
};

module.exports = verifyMarkup;
