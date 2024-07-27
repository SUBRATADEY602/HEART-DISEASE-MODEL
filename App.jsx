import "./App.css";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [predictedText, setPredictedTest] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const handleHeartDiseasePrediction = async (formData) => {
    try {
      const response = await Axios.post("http://localhost:8000/predict", {
        age: formData.age,
        sex: formData.sex,
        chest_pain_type: formData.cp,
        resting_blood_pressure: formData.trestbps,
        cholesterol: formData.chol,
        fasting_blood_sugar: formData.fbs,
        resting_electrocardiographic_results: formData.restcg,
        maximum_heart_rate_achieved: formData.thalach,
        exercise_induced_angina: formData.exang,
        st_depression_induced_by_exercise: formData.oldpeak,
        slope_of_the_peak_exercise_st_segment: formData.slope,
        number_of_major_vessels_colored_by_fluoroscopy: formData.ca,
        thalassemia: formData.thal,
      });
      setPredictedTest(response.data.prediction);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <>
      <header>
        <h1>Heart Disease Prediction</h1>
      </header>
      <main>
        <div className="video-container">
          <video autoPlay={true} muted={true} loop={true} id="bg-video">
            <source src="/bgVideo.mp4" type="video/mp4" />
          </video>
        </div>
        <form
          onSubmit={handleSubmit(handleHeartDiseasePrediction)}
          id="prediction-form"
        >
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              required
              {...register("age")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sex">Sex:</label>
            <input
              type="number"
              id="sex"
              name="sex"
              required
              {...register("sex")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cp">Chest Pain Type:</label>
            <input
              type="number"
              id="cp"
              name="cp"
              required
              {...register("cp")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="trestbps">Resting Blood Pressure:</label>
            <input
              type="number"
              id="trestbps"
              name="trestbps"
              required
              {...register("trestbps")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="chol">Cholesterol:</label>
            <input
              type="number"
              id="chol"
              name="chol"
              required
              {...register("chol")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fbs">Fasting Blood Sugar:</label>
            <input
              type="number"
              id="fbs"
              name="fbs"
              required
              {...register("fbs")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="restcg">
              Resting Electrocardiographic Results:
            </label>
            <input
              type="number"
              id="restcg"
              name="restcg"
              required
              {...register("restcg")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="thalach">Maximum Heart Rate Achieved:</label>
            <input
              type="number"
              id="thalach"
              name="thalach"
              required
              {...register("thalach")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exang">Exercise Induced Angina:</label>
            <input
              type="number"
              id="exang"
              name="exang"
              required
              {...register("exang")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="oldpeak">ST Depression Induced by Exercise:</label>
            <input
              type="number"
              id="oldpeak"
              name="oldpeak"
              required
              {...register("oldpeak")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="slope">
              Slope of the Peak Exercise ST Segment:
            </label>
            <input
              type="number"
              id="slope"
              name="slope"
              required
              {...register("slope")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ca">
              Number of Major Vessels Colored by Fluoroscopy:
            </label>
            <input
              type="number"
              id="ca"
              name="ca"
              required
              {...register("ca")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="thal">Thalassemia:</label>
            <input
              type="number"
              id="thal"
              name="thal"
              required
              {...register("thal")}
            />
          </div>

          <div id="btn-container">
            <button type="submit">Predict</button>
            <button
              className="reset"
              onClick={() => {
                reset();
                setPredictedTest("");
              }}
            >
              Reset
            </button>
          </div>
          <h1 className="predicted-text">{predictedText && predictedText}</h1>
        </form>
      </main>

      <footer>
        <p>&copy; 2024 Heart Disease Prediction. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
