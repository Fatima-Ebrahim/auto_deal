import React from 'react';
import {  Title, SectionWrapper } from "../../components/index";
const FeaturesSection = () => {
  
  const features = [
    {
      title: "Easy Search",
      description: "Find your perfect car with our advanced search tools.",
      icon: "🔍", 
    },
    {
      title: "Exclusive Deals",
      description: "Get access to special offers and discounts.",
      icon: "💎", 
    },
    {
      title: "24/7 Support",
      description: "We’re here to help you anytime, anywhere.",
      icon: "📞",
    },
  ];

  return (
    <SectionWrapper> 
       <Title titlePrimary="Why Choose our " titleSecondary="  website" />
      <div style={styles.featuresContainer}>
        {features.map((feature, index) => (
          <div key={index} style={styles.featureCard}>
            <div style={styles.icon}>{feature.icon}</div>
            <h3 style={styles.featureTitle}>{feature.title}</h3>
            <p style={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
      </SectionWrapper>
  );
};

const styles = {
 
 
  featuresContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
   

  },
  featureCard: {
    backgroundColor:" var(--color-dark)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(135, 197, 231, 0.1)",
    maxWidth: "300px",
    flex: "1 1 300px",
    overflow: "hidden",
    border: "1px solid white",
   
  }
  ,
  icon: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  featureTitle: {
    fontSize: "1.5rem",
    color:"var(--color-primary)",
    marginBottom: "10px",
  },
  featureDescription: {
    fontSize: "1rem",
    color:"white",
  },
};

export default FeaturesSection;
