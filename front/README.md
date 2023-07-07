       <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2}
          navigation
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          
          modules={[EffectCoverflow]}
          className="swiper_container"
        >
        <span className="swiper-button-next testimonials__arrow--left ">
        dsfnjslkdfjlsdkfja
      </span>
      <span onClick={() => swiper.slideNext()}  className="swiper-button-prev testimonials__arrow--right">
      </span>
          {testimonials.map((testimonial, key) => (
            <SwiperSlide>
                <Testimonials key={key} {...testimonial} />
              </SwiperSlide>
          ))}

  
          <div className="swiper-pagination"></div>
        </Swiper>