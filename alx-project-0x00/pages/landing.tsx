import Card from "@/components/Card";
import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Landing Page</h1>
      
      {/* Existing Card */}
      <Card />

      {/* Divider */}
      <hr className="my-6" />

      {/* Button Variations */}
      <h2 className="text-xl font-semibold mb-2">Button Variations</h2>
      
      {/* Small buttons */}
      <div className="flex gap-4 mb-4">
        <Button title="Small - Rounded-sm" styles="text-sm rounded-sm" />
        <Button title="Small - Rounded-md" styles="text-sm rounded-md" />
        <Button title="Small - Rounded-full" styles="text-sm rounded-full" />
        <Button title="Small - Rounded-lg" styles="text-sm rounded-lg" />
      </div>

      {/* Medium buttons */}
      <div className="flex gap-4 mb-4">
        <Button title="Medium - Rounded-sm" styles="text-base rounded-sm" />
        <Button title="Medium - Rounded-md" styles="text-base rounded-md" />
        <Button title="Medium - Rounded-full" styles="text-base rounded-full" />
        <Button title="Medium - Rounded-lg" styles="text-base rounded-lg" />
      </div>

      {/* Large buttons */}
      <div className="flex gap-4">
        <Button title="Large - Rounded-sm" styles="text-lg rounded-sm" />
        <Button title="Large - Rounded-md" styles="text-lg rounded-md" />
        <Button title="Large - Rounded-full" styles="text-lg rounded-full" />
        <Button title="Large - Rounded-lg" styles="text-lg rounded-lg" />
      </div>
    </div>
  );
};

export default Landing;
