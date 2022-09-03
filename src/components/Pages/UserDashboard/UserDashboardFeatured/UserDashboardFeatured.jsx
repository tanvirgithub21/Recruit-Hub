import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import SpinLoading from "../../../Shared/SpinLoading/SpinLoading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserStore } from "../../../../stateManagement/UserContext/UserContextStore";
import { toast } from "react-toastify";
import { serverLink } from "../../../../utilities/links";

const UserDashboardFeatured = () => {
  const { register, handleSubmit, reset } = useForm();

  const [featuredPhoto, setFeaturedPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const userStore = useContext(UserStore);
  const currentUser = userStore.user;

  const navigate = useNavigate();

  //image bb post url
  const imageBbUrl =
    "https://api.imgbb.com/1/upload?key=46aaf19b4e516e94653488331a5bff32";

  // upload featured photo image bb
  const upLodeFeaturedPhoto = (data) => {
    setLoading(true);
    const coverImg = data[0];
    const coverFormData = new FormData();
    coverFormData.append("image", coverImg);

    fetch(imageBbUrl, {
      method: "POST",
      body: coverFormData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.success) {
          setFeaturedPhoto(result?.data?.url);
          setLoading(false);
        }
      });
  };

  const onSubmit = async (formData) => {
    console.log(formData);
    const featuredData = {
      featured: [
        {
          featured_photo: featuredPhoto,
          featured_title: formData?.featured_title,
          featured_description: formData?.featured_description,
        },
      ],
    };

    // put data server
    await axios
      .put(`${serverLink}/user/user-profile/${currentUser._id}`, featuredData)
      .then((data) => {
        if (data?.data?.success) {
          toast.success("Update data successfully");
          reset();
          navigate("/user-dashboard/projects");
        }
      });
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-[32rem] mx-auto bg-[#edebeb] px-6 py-4 rounded-md mt-12">
        <h2 className="text-xl font-semibold text-[#333] py-3 text-center ">
          Add Featured
        </h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="w-full mb-3 ">
                <label
                  for="skills"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  Featured Photo<span className="text-red-600 ml-[1px]">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    onChange={(e) => upLodeFeaturedPhoto(e.target.files)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Featured Title"
                    type="file"
                    name="featuredPhoto"
                    id="featuredPhoto"
                  />
                  {loading && <SpinLoading />}
                </div>
              </div>
              <div className="w-full mb-3 ">
                <label
                  for="featured_title"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  Featured Title<span className="text-red-600 ml-[1px]">*</span>
                </label>
                <input
                  {...register("featured_title")}
                  type="text"
                  id="featured_title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Featured Title"
                  required
                />
              </div>
              <div className="w-full mb-3 ">
                <label
                  for="featured_description"
                  class="block mb-2 text-base font-medium text-gray-900 ml-1"
                >
                  Featured Description
                  <span className="text-red-600 ml-[1px]">*</span>
                </label>
                <textarea
                  {...register("featured_description")}
                  type="text"
                  name="featured_description"
                  rows="5"
                  id="featured_description"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Featured Description"
                  required
                />
              </div>
            </div>

            {/* Submit button  */}
            <div className=" max-w-[30rem] mx-auto">
              <button
                type="submit"
                className="px-3 py-1 btn w-full text-lg font-medium rounded-lg outline-none duration-150 ease-in-out mt-3"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardFeatured;
