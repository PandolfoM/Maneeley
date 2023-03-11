import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, FileInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import React from "react";
import useImages from "../../hooks/useImages";
import SubtleButton from "../SubtleButton";

function DashboardImages({ classes, name, data }) {
  const { addImage, deleteImage } = useImages();
  const form = useForm({
    initialValues: {
      file: null,
    },

    validate: {
      file: isNotEmpty(),
    },
  });

  return (
    <div className="dashboard-accordion">
      <Accordion
        defaultValue={name}
        variant="filled"
        transitionDuration={300}
        classNames={classes}>
        <Accordion.Item value={name} key={data?.id}>
          <Accordion.Control>{name}</Accordion.Control>
          <Accordion.Panel>
            <div className="item">
              <form
                className="item-controls"
                onSubmit={form.onSubmit((values) => {
                  addImage(values, name);
                  form.reset();
                })}>
                <div>
                  <FileInput
                    classNames={classes}
                    variant="unstyled"
                    size="xs"
                    placeholder="Choose image "
                    accept="image/png,image/jpeg"
                    icon={<FontAwesomeIcon icon={faUpload} />}
                    withAsterisk
                    {...form.getInputProps("file")}
                  />
                </div>
                <SubtleButton
                  type="submit"
                  name="Add"
                  style={{ whiteSpace: "nowrap" }}
                />
              </form>
              {data?.images?.map((i) => (
                <div key={i.id} className="item-item">
                  <SubtleButton
                    href={i.file}
                    name={i.name}
                    style={{
                      whiteSpace: "nowrap",
                      textOverflow: "clip",
                      maxWidth: "80%",
                    }}
                  />
                  <div className="item-item-func">
                    <SubtleButton
                      style={{ whiteSpace: "nowrap" }}
                      className="delete"
                      onClick={() => deleteImage(name, i)}
                      name={"Delete"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default DashboardImages;
