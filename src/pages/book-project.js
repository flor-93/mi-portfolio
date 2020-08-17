import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { PageFlip } from 'page-flip';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  const bookRef = useRef();

  useEffect(() => {
    if (bookRef.current) {
      const pageFlip = new PageFlip(bookRef.current, {
        width: 550, // base page width
        height: 733, // base page height

        size: 'stretch',
        // set threshold values:
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 1350,

        maxShadowOpacity: 0.5, // Half shadow intensity
        showCover: true,
        mobileScrollSupport: false, // disable content scrolling on mobile devices
      });

      // load pages
      pageFlip.loadFromHTML(document.querySelectorAll('.page'));
    }
  }, [bookRef.current]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      <div>FLor</div>
      <div className="container">
        <div>
          <button type="button" className="btn-prev">
            Previous page
          </button>
          [<span className="page-current">1</span> of <span className="page-total">-</span>]
          <button type="button" className="btn-next">
            Next page
          </button>
        </div>

        <div>
          State: <i className="page-state">read</i>, orientation:{' '}
          <i className="page-orientation">landscape</i>
        </div>
      </div>

      <div className="container">
        <div className="flip-book" ref={bookRef}>
          <div className="page page-cover page-cover-top" data-density="hard">
            <div className="page-content">
              <h2>BOOK TITLE</h2>
            </div>
          </div>
          <div className="page">
            <div className="page-content">
              <h2 className="page-header">Page header 1</h2>
              <div
                className="page-image"
                style={{
                  backgroundImage: 'url(https://nodlik.github.io/StPageFlip/images/html/1.jpg',
                }}
              />
              <div className="page-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non
                convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat.
                Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros
                velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus,
                accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin
                pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean
                vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
              </div>
              <div className="page-footer">2</div>
            </div>
          </div>
          <div className="page">
            <div className="page-content">
              <h2 className="page-header">Page header - 15</h2>
              <div
                className="page-image"
                style={{
                  backgroundImage: 'url(https://nodlik.github.io/StPageFlip/images/html/7.jpg',
                }}
              />
              <div className="page-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non
                convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat.
                Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros
                velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus,
                accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin
                pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean
                vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
              </div>
              <div className="page-footer">16</div>
            </div>
          </div>
          <div className="page">
            <div className="page-content">
              <h2 className="page-header">Page header - 16</h2>
              <div
                className="page-image"
                style={{
                  backgroundImage: 'url(https://nodlik.github.io/StPageFlip/images/html/8.jpg',
                }}
              />
              <div className="page-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non
                convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat.
                Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros
                velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus,
                accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin
                pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean
                vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac
                sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
              </div>
              <div className="page-footer">17</div>
            </div>
          </div>
          <div className="page page-cover page-cover-bottom" data-density="hard">
            <div className="page-content">
              <h2>THE END</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
