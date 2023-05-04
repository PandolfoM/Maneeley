import {
  faCircleExclamation,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, Alert, FileInput, LoadingOverlay } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import React, { useState } from "react";
import useImages from "../../hooks/useImages";
import SubtleButton from "../SubtleButton";

function DashboardImages({ classes, name, data }) {
  const { addImage, deleteImage } = useImages();
  const [loading, setLoading] = useState(false);

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
          <LoadingOverlay visible={loading} />
          <Accordion.Control>{name}</Accordion.Control>
          <Accordion.Panel>
            <div className="item">
              <form
                className="item-controls"
                onSubmit={form.onSubmit(async (values) => {
                  setLoading(true);
                  await addImage(values, name);
                  form.reset();
                  setLoading(false);
                })}>
                <div>
                  <FileInput
                    classNames={classes}
                    variant="unstyled"
                    size="xs"
                    multiple
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
              <div className="item-content">
                {data?.images?.length === 0 ? (
                  <Alert
                    sx={{
                      marginTop: "0.5rem",
                      backgroundColor: "#2e2e2e80",
                      color: "#f53434",
                      borderColor: "#f53434",
                    }}
                    icon={<FontAwesomeIcon icon={faCircleExclamation} />}
                    title="No Images"
                    color={"red"}
                    variant="outline">
                    There are no images yet
                  </Alert>
                ) : (
                  <>
                    {data?.images?.map((i) => (
                      <div key={i.id} className="item-item">
                        <SubtleButton href={i.file} name={i.name} />
                        <div className="item-item-func">
                          <SubtleButton
                            style={{
                              whiteSpace: "nowrap",
                              maxWidth: "fit-content",
                            }}
                            className="delete"
                            onClick={async () => {
                              setLoading(true);
                              await deleteImage(name, i);
                              setLoading(false);
                            }}
                            name={"Delete"}
                          />
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default DashboardImages;
