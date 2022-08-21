const emailMarkup = ({ email, verificationToken }) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JuniorSeniors Dev</title>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />

    <style type="text/css">
      #ko_onecolumnBlock_1 .textintenseStyle a,
      #ko_onecolumnBlock_1 .textintenseStyle a:link,
      #ko_onecolumnBlock_1 .textintenseStyle a:visited,
      #ko_onecolumnBlock_1 .textintenseStyle a:hover {
        color: #ffffff;
        color: 0e6A53;
        text-decoration: none;
        font-weight: bold;
        text-decoration: none;
      }

      #ko_onecolumnBlock_1 .textlightStyle a,
      #ko_onecolumnBlock_1 .textlightStyle a:link,
      #ko_onecolumnBlock_1 .textlightStyle a:visited,
      #ko_onecolumnBlock_1 .textlightStyle a:hover {
        color: #3f3d33;
        color: 0e6A53;

        text-decoration: none;
        font-weight: bold;
        text-decoration: 0e6A53;
      }
    </style>

    <style type="text/css">
      /* CLIENT-SPECIFIC STYLES */
      #outlook a {
        padding: 0;
      } /* Force Outlook to provide a "view in browser" message */
      .ReadMsgBody {
        width: 100%;
      }
      .ExternalClass {
        width: 100%;
      } /* Force Hotmail to display emails at full width */
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      } /* Force Hotmail to display normal line spacing */
      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      } /* Prevent WebKit and Windows mobile changing default text sizes */
      table,
      td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      } /* Remove spacing between tables in Outlook 2007 and up */
      img {
        -ms-interpolation-mode: bicubic;
      } /* Allow smoother rendering of resized image in Internet Explorer */

      /* RESET STYLES */
      body {
        margin: 0;
        padding: 0;
      }
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
      }
      table {
        border-collapse: collapse !important;
      }
      body {
        height: 100% !important;
        margin: 0;
        padding: 0;
        width: 100% !important;
      }

      /* iOS BLUE LINKS */
      .appleBody a {
        color: #68440a;
        text-decoration: none;
      }
      .appleFooter a {
        color: #999999;
        text-decoration: none;
      }

      /* MOBILE STYLES */
      @media screen and (max-width: 525px) {
        /* ALLOWS FOR FLUID TABLES */
        table[class="wrapper"] {
          width: 100% !important;
          min-width: 0px !important;
        }

        /* USE THESE CLASSES TO HIDE CONTENT ON MOBILE */
        td[class="mobile-hide"] {
          display: none;
        }

        img[class="mobile-hide"] {
          display: none !important;
        }

        img[class="img-max"] {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
        }

        /* FULL-WIDTH TABLES */
        table[class="responsive-table"] {
          width: 100% !important;
        }

        /* UTILITY CLASSES FOR ADJUSTING PADDING ON MOBILE */
        td[class="padding"] {
          padding: 10px 5% 15px 5% !important;
        }

        td[class="padding-copy"] {
          padding: 10px 5% 10px 5% !important;
          text-align: center;
        }

        td[class="padding-meta"] {
          padding: 30px 5% 0px 5% !important;
          text-align: center;
        }

        td[class="no-pad"] {
          padding: 0 0 0px 0 !important;
        }

        td[class="no-padding"] {
          padding: 0 !important;
        }

        td[class="section-padding"] {
          padding: 10px 15px 10px 15px !important;
        }

        td[class="section-padding-bottom-image"] {
          padding: 10px 15px 0 15px !important;
        }

        /* ADJUST BUTTONS ON MOBILE */
        td[class="mobile-wrapper"] {
          padding: 10px 5% 15px 5% !important;
        }

        table[class="mobile-button-container"] {
          margin: 0 auto;
          width: 100% !important;
        }

        a[class="mobile-button"] {
          width: 80% !important;
          padding: 15px !important;
          border: 0 !important;
          font-size: 16px !important;
        }
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0" bgcolor="#ffffff" align="center">
    <!-- PREHEADER -->

    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="min-width: 530px"
      id=""
    >
      <tbody>
        <tr>
          <td bgcolor="#00543f" class="mobile-hide">
            <div align="center" style="padding: 0px 15px 0px 15px">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="500"
                style="min-width: 500px"
                class="wrapper"
              >
                <!--Preheade/view on web TEXT -->
                <tbody>
                  <tr>
                    <td style="padding: 10px 0px 10px 0px">
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                      >
                        <tbody>
                          <tr>
                            <td
                              bgcolor="#00543f"
                              width="50%"
                              align="left"
                              class="mobile-hide"
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      align="left"
                                      style="
                                        padding: 0 0 5px 0;
                                        font-size: 12px;
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                        color: #ffffff;
                                        text-decoration: none;
                                      "
                                    >
                                      <span
                                        style="
                                          color: #ffffff;
                                          text-decoration: none;
                                        "
                                      ></span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>

                            <td
                              bgcolor="#00543f"
                              width="50%"
                              align="right"
                              class="mobile-hide"
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      align="right"
                                      style="
                                        padding: 0 0 5px 0;
                                        font-size: 12px;
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                        color: #ffffff;
                                        text-decoration: none;
                                      "
                                    >
                                      <a
                                        href="[show_link]"
                                        style="color: #ffffff"
                                        target="_new"
                                        ><span></span
                                      ></a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      id="ko_imageBlock_1"
    >
      <tbody>
        <tr class="row-b">
          <td
            bgcolor="#218169"
            align="center"
            class="no-pad"
            style="
              padding-top: 0px;
              padding-left: 15px;
              padding-bottom: 0px;
              padding-right: 15px;
            "
          >
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="500"
              class="responsive-table"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <!-- HERO IMAGE -->
                            <table
                              width="100%"
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                            >
                              <tbody>
                                <tr>
                                  <td class="no-padding">
                                    <table
                                      width="100%"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                    >
                                      <tbody>
                                        <tr>
                                          <td>
                                            <a
                                              target="_new"
                                              href="https://kapusta-bank-client.vercel.app/auth"
                                              ><img
                                                width="500"
                                                border="0"
                                                alt="Site logo with link"
                                                class="img-max"
                                                style="
                                                  display: block;
                                                  padding: 0;
                                                  color: #3f3d33;
                                                  text-decoration: none;
                                                  font-family: Helvetica, Arial,
                                                    sans-serif;
                                                  font-size: 16px;
                                                  width: 500px;
                                                "
                                                src="https://mosaico.io/srv/f-unq0xcd/img?src=https%3A%2F%2Fmosaico.io%2Ffiles%2Funq0xcd%2FGroup%252068.png&amp;method=resize&amp;params=500%2Cnull"
                                            /></a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      id="ko_onecolumnBlock_1"
    >
      <tbody>
        <tr class="row-b" style=" ;">
          <td
            bgcolor="#00543f"
            align="center"
            class="section-padding"
            style="
              padding-top: 30px;
              padding-left: 15px;
              padding-bottom: 30px;
              padding-right: 15px;
            "
          >
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="500"
              class="responsive-table"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <!-- COPY -->
                            <table
                              width="100%"
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    class="padding-copy"
                                    style="
                                      font-size: 25px;
                                      font-family: Helvetica, Arial, sans-serif;
                                      color: #ffffff;
                                      padding-top: 0px;
                                    "
                                  >
                                    Hello ${email}
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    class="padding-copy textintenseStyle"
                                    style="
                                      padding: 20px 0 0 0;
                                      font-size: 16px;
                                      line-height: 25px;
                                      font-family: Helvetica, Arial, sans-serif;
                                      color: #ffffff;
                                    "
                                  >
                                    <p><br /><br /></p>
                                    <p>
                                      You registered an account on our financial portal <a href='https://kapusta-bank-client.vercel.app/auth'> Kapu$ta, before being able to use your
                                      account you need to verify that this is
                                      your email address by clicking the button
                                      below
                                    </p>
                                    <p>&nbsp;</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <!-- BULLETPROOF BUTTON -->
                            <table
                              width="100%"
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                              class="mobile-button-container"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 25px 0 0 0"
                                    class="padding-copy"
                                  >
                                    <table
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      class="responsive-table"
                                    >
                                      <tbody>
                                        <tr>
                                          <td align="center">
                                            <a
                                              target="_new"
                                              class="mobile-button"
                                              style="
                                                display: inline-block;
                                                font-size: 18px;
                                                font-family: Helvetica;
                                                font-weight: normal;
                                                color: #fff;
                                                text-decoration: none;
                                                background-color: #0e6a53;
                                                padding-top: 15px;
                                                padding-bottom: 15px;
                                                padding-left: 25px;
                                                padding-right: 25px;
                                                border-radius: 15px;
                                                -webkit-border-radius: 15px;
                                                -moz-border-radius: 15px;
                                                border-bottom: 4px solid #073429;
                                              "
                                              href="https://kapusta-backend-proj.herokuapp.com/api/auth/verify/${verificationToken}"
                                              >Verify Your Email</a
                                            >
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- FOOTER -->
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="min-width: 500px"
      id=""
    >
      <tbody>
        <tr>
          <td bgcolor="#218169" align="center">
            <table
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
              align="center"
            >
              <tbody>
                <tr>
                  <td style="padding: 20px 0px 20px 0px"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
};

module.exports = emailMarkup;
