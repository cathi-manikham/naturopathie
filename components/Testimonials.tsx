"use client";
import { Container, Heading } from "@chakra-ui/react";
import Slider from "react-slick";
import { testimonials } from "../data/testimonials";
import TestimonialsCard from "./TestimonialsCard";
import { Colors } from "@/theme/colors";

export const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };
  return (
    <Container py={{ base: 12, md: 24 }} maxW='7xl'>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        color={Colors.darkPink400}
        mb='32px'
      >
        Testimonials
      </Heading>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <TestimonialsCard
            key={testimonial.id}
            review={testimonial.review}
            name={testimonial.name}
            date={testimonial.date}
            heading={testimonial.heading}
          />
        ))}
      </Slider>
    </Container>
  );
};
