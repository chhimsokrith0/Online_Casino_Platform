

const Steps_Section = ({t}:{t:any}) => {
  return (
    <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        {[
          { id: "01", text: t("steps.step1") },
          { id: "02", text: t("steps.step2") },
          { id: "03", text: t("steps.step3") },
        ].map((step) => (
          <div key={step.id} className="text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white text-xl font-bold border-2 border-gray-400 mx-auto mb-4">
              {step.id}
            </div>
            <p className="text-white text-sm font-medium">{step.text}</p>
          </div>
        ))}
      </div>
  );
};

export default Steps_Section;