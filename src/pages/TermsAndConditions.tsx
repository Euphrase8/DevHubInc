import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-glow">
            Terms and Conditions
          </h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services provided by DevHub Developers Inc., you accept and agree 
                to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
              <p>
                DevHub Developers Inc. provides custom software development, web and mobile app development, 
                cloud integration, DevOps, UI/UX design, and API development services. The specific scope of 
                services will be defined in individual project agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Payment Terms</h2>
              <p>
                Payment terms will be specified in individual project agreements. Clients are required to make 
                payments according to the agreed schedule. Late payments may result in project delays or suspension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
              <p>
                Upon full payment, clients will receive ownership of the custom code and designs created 
                specifically for their project. DevHub Developers Inc. retains the right to use general 
                methodologies, frameworks, and tools in future projects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Warranties and Liability</h2>
              <p>
                We provide our services with reasonable skill and care. However, we do not guarantee that 
                our services will be uninterrupted or error-free. Our liability is limited to the amount 
                paid for the specific project in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential any proprietary information shared during the course 
                of the project. This obligation continues even after project completion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Termination</h2>
              <p>
                Either party may terminate the agreement with written notice. Clients are responsible for 
                payment for all work completed up to the termination date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Governing Law</h2>
              <p>
                These terms are governed by the laws of Tanzania. Any disputes will be resolved in the 
                courts of Dar es Salaam, Tanzania.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Information</h2>
              <p>
                For questions about these Terms and Conditions, contact us at info@devhub.com or 
                +255784425661. Our office is located in Ilala, Dar es Salaam, Tanzania.
              </p>
            </section>

            <section className="pt-4">
              <p className="text-sm">Last updated: January 2025</p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
