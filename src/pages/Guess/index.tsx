import { predictReview } from "services/backend_services";
import { useQuery, useMutation } from "react-query";
import * as Yup from "yup";
import { useState } from "react";
import { useFormik as useFormic } from "formik";

export default function GuessApp() {
  const [Result, setResult] = useState("")
  const [AbsaResult, setAbsaResult] = useState([])
  const mutation = useMutation(predictReview,{
    onSuccess : (data)=>{      
      setAbsaResult(data)
    }
  });

  const validation: any = useFormic({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      review_text: "",
    },
    validationSchema: Yup.object({
      review_text: Yup.string().required("Please Fill This Field"),
    }),
    onSubmit: (value) => {
      mutation.mutate(value.review_text);
      setResult(value.review_text)
    },
  });

  return (
    <>
      <div className="mt-5 md:flex md:gap-3 bg-white shadow-sm h-[60vh] justify-center items-center">
        <div className="mt-10 basis-1/2 w-full px-5 py-3">
          <div>
            <form
              action=""
              onSubmit={(event: any) => {
                event.preventDefault();
                validation.handleSubmit();
                return false;
              }}
            >
              <label
                htmlFor="textArea"
                className="inline-block mb-2 text-base font-medium"
              >
                Input Review
              </label>
              <textarea
                className="resize-none h-32 form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                id="review_text"
                rows={3}
                onChange={validation.handleChange}
                value={validation.values.review_text || ""}
              ></textarea>
                    {validation.touched.review_text && validation.errors.review_text ? (
                      <div
                        id="username-error"
                        className="mt-1 text-sm text-red-500"
                      >
                        {validation.errors.review_text}
                      </div>
                    ) : null}
              <button
                type="submit"
                className="mt-3 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
              >
                Submit 
                {mutation.isLoading? <span className="inline-block size-4 ml-2 border-2 rounded-full animate-spin border-l-transparent "></span>:<></>}
              </button>
            </form>
          </div>
        </div>
        <div className="basis-1/2 w-full px-5 py-3">
          <label
            htmlFor="textArea"
            className="inline-block mb-2 text-base font-medium"
          >
            Hasil Prediksi
          </label>
          <div className="h-32 form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 select-none">
            <div className="mb-4 text-center">{Result}</div>
            <div>
            {AbsaResult.map(
                ({span,polarity},i)=>{
                    let color = "slate"
                    let stment = "N"
                    if(polarity==="positif"){
                        color="green"
                        stment = "+"
                    }else if(polarity==="negatif"){
                        color="red"
                        stment = "-"
                    }
                    return <span key={i} className={`me-2 px-2.5 py-0.5 inline-block text-[0.75rem] font-medium rounded border bg-${color}-100 border-transparent text-${color}-500 dark:bg-${color}-500/20 dark:border-transparent`}>{span} ({stment})</span>
                }
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
