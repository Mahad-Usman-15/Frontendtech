// PrivacyPolicy.js

import { motion } from 'framer-motion';
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <motion.div
          className="bg-gradient-to-r from-blue-900 to-blue-950 px-6 py-8 sm:px-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-white text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-blue-100 text-center mt-2 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
           
          </motion.p>
        </motion.div>

        <motion.div   initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            staggerChildren: 0.2,
          }} className="px-6 py-8 sm:px-8 sm:py-12">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to our Privacy Policy. Your privacy is critically important to us. 
              This privacy policy document outlines the types of personal information 
              that is collected and recorded by our website and how we use it.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We collect several different types of information for various purposes to provide and improve our service to you.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Data</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Usage Data</h3>
              <p className="text-gray-700 leading-relaxed">
                We may also collect information on how the service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tracking & Cookies Data</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use cookies and similar tracking technologies to track the activity on our service and hold certain information.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our service.
              </p>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features of our service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Service Providers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Providers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may employ third party companies and individuals to facilitate our service ("Service Providers"), to provide the service on our behalf, to perform service-related services or to assist us in analyzing how our service is used.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          {/* Links to Other Sites */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Links to Other Sites</h2>
            <p className="text-gray-700 leading-relaxed">
              Our service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We will let you know via email and/or a prominent notice on our service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> privacy@yourcompany.com
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Phone:</span> +1 (555) 123-4567
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Address:</span> 123 Business Street, City, State 12345
              </p>
            </div>
          </section>

          {/* Consent */}
          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Your Consent</h2>
            <p className="text-gray-700 leading-relaxed">
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
          </section>
        </motion.div>


      </div>
    </div>
  );
};

export default PrivacyPolicy;